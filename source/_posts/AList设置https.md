---
title: AList设置https
date: 2024-02-05 19:00:00
tags:
    - 技术
    - 网盘
---

看了很多教程，要不就是nginx反代要不就是宝塔，想着出一篇简单的教程

接上文，在letsencrypt~~白嫖了~~申请了自己域名的证书之后，自己Alist网盘的https改怎么设置呢？

### DDNS

会弄AList的人大多数也会DDNS了，但在这里我还是向大家推荐一个软件：DDNS-GO，具体就请自己搜索了

### 配置

注意：以下方法仅适用于Linux（因为我没有在Windows下使用过AList，更不知道这东西在Windows下的配置文件在哪里，能找到的话可以自己试试看）

首先，打开命令行，切换到root用户

如果你是使用一键脚本安装的AList的话，那么他的配置文件大概率在`/opt/alist/data`目录下，这个目录没有root权限是进不去的

之后，打开文件`/opt/alist/data/config.json`，其中有如下内容：

```json
"scheme": {
    "address": "0.0.0.0",
    "http_port": 5244,
    "https_port": -1,
    "force_https": false,
    "cert_file": "",
    "key_file": "",
    "unix_file": "",
    "unix_file_perm": ""
  }
```

你可能注意到了，其中有 cert\_file和key\_file两条配置，正对应着上次申请证书最后输出的`Certificate is saved at:`和`Key is saved at:`，把后面的文件路径填进去，就配置好证书文件了

但是，先别急着restart，这个`https_port`还是-1呢，你可以把他变成你想要的数字，像我就把`http_port`换成了5243，`https_port`换成了5244，对于我这种记不住端口号的人十分友好

如果你想要强制使用https，也可以把下面的`force_https`改为true，不过我倒是没有开，如果哪天https端口炸了。。。

### 启用  

大功告成！使用下面的命令重新启动AList

```bash
systemctl restart alist
```

享受有着SSL/TLS加持的AList吧

---

如果觉得对你有用的话，欢迎到处转发，有什么问题还可以在下面问我
