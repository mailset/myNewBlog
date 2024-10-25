---
title: 把网站所有图片资源迁移为webp格式
date: 2024-10-25 19:30:00
categories:
    - 博客
tags:
    - 技术
    - 博客
---

本网站从此把所有的需要对外显示的图片资源文件全部转换为webp格式

我为什么这样做？看完文章你就明白了

我将会先介绍如何把所有图片资源转为webp格式

## cwebp下载

cwebp是谷歌官方出品的一款将已有图片转换为webp格式文件的软件，用这个软件可以很方便的将已有的很多格式的图片资源文件转换为webp格式文件

具体的教程可以看[GoogleDocs/https://developers.google.cn/speed/webp/docs/cwebp](https://developers.google.cn/speed/webp/docs/cwebp)来了解更加详细的信息

如果想手动编译的话，可以访问[GoogleGit/https://chromium.googlesource.com/webm/libwebp/](https://chromium.googlesource.com/webm/libwebp/)来寻找源代码，自行编译

但是如果不想编译的话，谷歌也提供了现成的编译过的release，访问[GoogleAPIs/https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html)来直接下载release

需要注意的是，要获取最新版本，必须**往下翻到底**才能看到

文件格式如下所示：

```text
libwebp-version-os-platform.zip
```

或者

```text
libwebp-version-os-platform.tar.gz
```

例如：

```text
libwebp-1.4.0-windows-x64.zip
```

按需要下载自己需要的文件

## 使用

下载之后就需要解压了，压缩包中只有一个目录，我们把他解压出来，解压出来后目录结构大致如下：

```text
libwebp-1.4.0-windows-x64
│  README.md
│  test.webp
│  test_ref.ppm
│
├─bin
│      anim_diff.exe
│      anim_dump.exe
│      cwebp.exe
│      dwebp.exe
│      freeglut.dll
│      get_disto.exe
│      gif2webp.exe
│      img2webp.exe
│      vwebp.exe
│      webpinfo.exe
│      webpmux.exe
│      webp_quality.exe
│
├─doc
│      api.md
│      tools.md
│
├─include
│  └─webp
│          decode.h
│          demux.h
│          encode.h
│          mux.h
│          mux_types.h
│          types.h
│
└─lib
        libwebp.lib
        libwebpdemux.lib
        libwebpmux.lib
```

我们需要的只是bin目录下的cwebp.exe文件，可以讲bin目录加入进环境变量中，这里不再细讲

打开控制台，查看是否正常

```shell
cwebp -version
```

输出就像：

```text
1.4.0
libsharpyuv: 0.4.0
```

正常使用（有损压缩）用法：

```shell
cwebp -m [可选，压缩品质(0-6)，数字越大越慢，默认为4] -q <品质(0-100)，数字越大品质越好> ./输入文件 -o ./输出.webp
# 例如
cwebp -m 6 -q 95 ./default.png -o ./default.webp
```

一般情况下的输出：

```text
Saving file './default.webp'
File:      ./default.png
Dimension: 2338 x 1440
Output:    367416 bytes Y-U-V-All-PSNR 49.86 52.49 52.66   50.59 dB
           (0.87 bpp)
block count:  intra4:      12127  (91.66%)
              intra16:      1103  (8.34%)
              skipped:        26  (0.20%)
bytes used:  header:            586  (0.2%)
             mode-partition:  52214  (14.2%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
    macroblocks:  |       1%|       5%|      18%|      77%|   13230
      quantizer:  |       6 |       6 |       5 |       4 |
   filter level:  |       2 |       0 |       0 |       9 |
```

想要无损压缩的也可以，用法：

```shell
cwebp -lossless ./输入文件 -o ./输出.webp
# 例如
cwebp -lossless ./default.png -o ./default.webp
```

一般情况下的输出

```text
Saving file './default.webp'
File:      ./default.png
Dimension: 350 x 350
Output:    11240 bytes (0.73 bpp)
Lossless-ARGB compressed size: 11240 bytes
  * Header size: 1337 bytes, image data size: 9878
  * Lossless features used: PREDICTION CROSS-COLOR-TRANSFORM SUBTRACT-GREEN
  * Precision Bits: histogram=3 transform=3 cache=0
```

压缩后可以使用vwebp查看是否编码正确，用法：

```shell
vwebp ./输出.webp
```

运行后会弹出一个窗口，显示的是当前图片编码后的样式

## 为什么用webp

回到开头，我为什么要用webp而不用传统的png/jpg之类的格式呢？

有一个最大的好处，就是“小”

例如这个文章的头图，也就是网站的主图，压缩前的大小为3.26MB，而经过95品质的压缩后，大小来到了惊人的
**358KB**
即使是使用了无损压缩格式，压缩后也只有**2.4MB**左右

这样不但可以加快访问速度，还能省下不少的带宽，要知道Vercel免费计划每月为100GB，网站肯定是越精简越好的

所以你还有什么理由不用webp格式的图片呢

---

感谢您阅读此文章，如果有什么不对的地方欢迎再评论区纠正！
