"""
QuantDinger Python API 入口文件。
"""
import os
import sys

# 在 Windows 上强制使用 UTF-8 控制台输出，避免日志出现 UnicodeEncodeError。
# （PowerShell 默认编码可能是 GBK/CP936。）
try:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

# 提前加载本地 .env，确保配置类可以从 os.environ 中读取变量。
# 这样本地部署更简单：修改一个文件后即可运行。
try:
    from dotenv import load_dotenv
    this_dir = os.path.dirname(os.path.abspath(__file__))
    # 主路径：backend_api_python/.env（与 run.py 同目录）
    load_dotenv(os.path.join(this_dir, ".env"), override=False)
    # 兜底路径：仓库根目录 .env（上一级目录），适用于把 .env 放在工作区根目录的场景。
    parent_dir = os.path.dirname(this_dir)
    load_dotenv(os.path.join(parent_dir, ".env"), override=False)
except Exception:
    # python-dotenv 是可选依赖；即使缺失，也可由操作系统环境变量提供配置。
    pass

# 可选：禁用 tqdm 进度条（如 akshare 等数据源可能输出），
# 使本地模式下控制台日志更整洁。
os.environ.setdefault("TQDM_DISABLE", "1")

# 可选：统一进程级外部代理配置。
# 这样 requests/yfinance/finnhub/tiingo/GoogleSearch 等库可在本地代理下正常工作。
#
# 中国境内数据源（AkShare -> 东方财富/新浪等）应绕过代理，
# 避免通过海外代理产生不必要的网络绕行。
_CN_FINANCIAL_DOMAINS = ",".join([
    ".eastmoney.com",
    ".sina.com.cn",
    ".sinajs.cn",
    ".10jqka.com.cn",
    ".ssec.com.cn",
    ".szse.cn",
    ".hexun.com",
    ".cninfo.com.cn",
    ".gtimg.cn",
    ".qq.com",
    ".tencent.com",
    ".mairui.club",
    ".akshare.xyz",
    ".baostock.com",
    ".stcn.com",
    ".p5w.net",
    ".finance.sina.com.cn",
])

def _apply_proxy_env():
    def _set_if_blank(key: str, value: str) -> None:
        """
        当环境变量不存在或为空字符串时写入默认值。
        （`os.environ.setdefault` 不会覆盖空字符串。）
        """
        cur = os.getenv(key)
        if cur is None or str(cur).strip() == "":
            os.environ[key] = value

    # 如果用户显式提供代理地址，则优先采用。
    proxy_url = (os.getenv('PROXY_URL') or '').strip()

    if not proxy_url:
        return

    # requests 及许多库通用的标准代理环境变量。
    _set_if_blank('ALL_PROXY', proxy_url)
    _set_if_blank('HTTP_PROXY', proxy_url)
    _set_if_blank('HTTPS_PROXY', proxy_url)

    # 为中国境内金融数据源设置代理绕过。
    # AkShare 访问东方财富/新浪等站点时应直连，不经过海外代理。
    existing_no_proxy = (os.getenv('NO_PROXY') or '').strip()
    if existing_no_proxy:
        merged = existing_no_proxy + "," + _CN_FINANCIAL_DOMAINS
    else:
        merged = _CN_FINANCIAL_DOMAINS
    os.environ['NO_PROXY'] = merged
    os.environ['no_proxy'] = merged

_apply_proxy_env()

# 将项目根目录加入 Python 路径
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app
from app.config.settings import Config

# 创建应用实例（供 gunicorn 使用）
# 启动示例：gunicorn -c gunicorn_config.py "run:app"
app = create_app()


def main():
    """启动应用"""
    # 启动信息保持简短（兼容控制台显示）。
    print("QuantDinger Python API v2.2.2")
    
    # ========== SECRET_KEY 关键安全检查 ==========
    # 在生产环境（DEBUG=False）下，SECRET_KEY 绝不能使用默认示例值。
    # 这样可防止攻击者伪造具备管理员权限的 JWT 令牌。
    default_secret = "quantdinger-secret-key-change-me"
    current_secret = Config.SECRET_KEY
    if not Config.DEBUG and current_secret == default_secret:
        import secrets as _secrets
        new_key = _secrets.token_hex(32)
        os.environ["SECRET_KEY"] = new_key
        print("[AUTO] SECRET_KEY 为默认值，已为当前会话自动生成随机密钥。")
        print("[TIP]  生产环境请在 backend_api_python/.env 中设置持久化 SECRET_KEY。")
    
    print(f"Service starting at: http://{Config.HOST}:{Config.PORT}")
    
    # Flask 开发服务器仅用于本地开发。
    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=Config.DEBUG,
        threaded=True
    )


if __name__ == '__main__':
    main()
