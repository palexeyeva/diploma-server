
#! /usr/bin/python3
# -*- coding: UTF-8 -*-
import cgi, sys


print("Content-type: text/html\n")

form = cgi.FieldStorage()  # получение данных из формы

html = """
<TItle>my_action.py</TItle>
<H1>Hello World!</H1>
<HR>
<H4>%s</H4>
<H4>%s</H4>
</HR>"""


line1 = 'Hello, %s.' % form['user'].value
line2 = 'Your age, %s.' % form['age'].value

print(html%(line1, line2)) # вывод полученных данных
