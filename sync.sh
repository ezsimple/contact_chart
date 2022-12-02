#!/bin/bash
SRC=/home/mkeasy/study/my/02.python/contact_anal/chart
DST=src/static/media
\cp -f $SRC/* $DST
# ln -s $SRC/* $DST # 링크된 데이터는 github에 '경로명'이 전달된다.
