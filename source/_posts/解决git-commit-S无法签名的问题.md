---
title: 解决git commit -S无法签名的问题
date: 2024-11-16 00:40:00
tags:
  - 技术
  - 代码
---

刚刚提交git的时候发现`git commit -S`卡了很长时间然后失败了，遂上网搜了一下，但未能找到准确的解决方案

但是我自己在使用网上给出的`gpg-agent-daemon`命令时，发现`gpg-agent`命令可以运行，于是写下这篇随笔

笔者用的是Windows 11系统，GnuPG版本为`2.4.5`

## 现象

在`git commit -S -m "aaa"`的时候，会卡住很长时间不动，以往是卡完之后commit成功或者不用卡就成功，但今天失败了，输出如下所示：

```text
error: gpg failed to sign the data:
gpg: can't connect to the keyboxd: IPC connect call failed?
gpg: error opening key DB: No Keybox daemon running?
gpg: skipped "XXX": Input/output error?
[GNUPG:] INV_SGNR 0 XXX?
[GNUPG:] FAILURE sign 33587249?
gpg: signing failed: Input/output error?

fatal: failed to write commit object
```

## 解决

我发现的解决方法很简单，运行：

```bash
gpg-agent
```

输出：

```text
gpg-agent[pid]: gpg-agent running and available
```

再次commit，成功:

```txt
[main aaa] aaa
 n files changed, n insertions(+), n deletions(-)
 create mode 100644 aaa
 create mode 100644 bbb
 create mode 100644 ccc
```

解决

---

如果有什么疑问或者补充可以在下面评论！感谢支持！
