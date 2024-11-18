---
title: 解决淘宝买的1.3寸oled花屏的问题
date: 2024-11-18 21:30:00
tags:
    - micropython
    - 树莓派
    - 树莓派Pico
    - 技术
    - oled
    - 嵌入式
---

最近想玩树莓派Pico了，就在淘宝上买了个便宜的1.3寸oled屏，好像是ssd1315主控，但我找遍全网都没找到能用的micropython的驱动，刚刚终于找着了，作此小纪

访问这个库 [robert-hh/sh1106](https://github.com/robert-hh/SH1106) 下载sh1106.py，上传到你的pico上，代码范例：

```python
from machine import Pin, I2C
from utime import sleep
import sh1106

pin = Pin("LED", Pin.OUT)

i2c = I2C(0, scl=Pin(13), sda=Pin(12))
print("I2C device: " + str(i2c.scan()))
oled = sh1106.SH1106_I2C(128,64,i2c)
oled.init_display()
oled.poweron()
stat = 0
oled.flip(True)
while True:
    oled.text("I2C:" + str(i2c.scan()),0,2)
    oled.invert(stat)
    oled.show()
    stat = 0 if stat else 1
    sleep(0.5)
```

有什么错误欢迎大家指正！
