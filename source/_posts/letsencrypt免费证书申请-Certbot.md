---
title: letsencrypt免费证书申请--Certbot
date: 2024-02-05 18:00:00
tags:
    - 技术
    - 博客
---

刚才找了半天教程找不到，在这里分享一下

### 安装 Certbot

如果你用的是ArchLinux，那么可以通过下面的命令直接安装

```bash
sudo pacman -S certbot
```

如果你用的是其他发行版/MacOS/Windows，那么请访问[https://certbot.eff.org/](https://certbot.eff.org/)

### 申请证书  

打开终端，输入下面的命令（适用于Linux，Windows用户请去掉sudo）

```bash
sudo certbot certonly -d "你的域名" --manual --preferred-challenges dns-01
```

域名样例： 泛域名：\*.mailset.top 单个域名：mailset.top/www.mailset.top

如果你是第一次申请，前面两个问题均输入Y即可

之后，会有输出如下：

```txt
Please deploy a DNS TXT record under the name:

_acme-challenge.你的网址.

with the following value:

要添加的记录

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.mailset.top.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.
```

这时你先别急着回车，先访问你的dns提供商， 在 \_acme-challenge.你的网址 添加一个 TXT 记录，内容为上文 要添加记录 中的内容

添加之后，可以先nslookup一下看看是否成功添加，之后再按回车确认

如果成功，下文会输出证书的地址，直接用即可

### 建议

第一次使用可以在certbot命令的参数加上 --dry-run，因为一个月同一个域名申请证书的机会是有限的，要是几次验证全没过。。。

之后就可以去掉 --dry-run，让它实际的申请证书了

---

一会儿再写一个alist证书设置，希望对你有用（

有什么疑问欢迎在下面提问
