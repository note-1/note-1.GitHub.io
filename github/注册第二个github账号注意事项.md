# 关于github账号

同一台计算机只能使用一个github账号，因为只安装了一个Git应用，并且普通windows凭证只能添加一个github账号。

正在使用一个github账号的情形下，又申请一个新的github账号，准备使用新的账号clone仓库和push代码时，Git会默认使用之前的github账号提交，即使是使用新的账号clone的仓库。

更换github账户使用需要2步修改配置：

1.使用Git Bash修改git的全局配置文件
git config --global user.name 新的账号名称
git config --global user.email 新的注册邮箱

2.windows系统环境下修改普通凭证
打开 控制面板 -> 凭证管理器 ->普通凭据
修改Git连接github网站的用户名称和密码

