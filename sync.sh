#!/bin/bash
SRC=/home/mkeasy/study/my/02.python/contact_anal/chart
DST=src/static/media
# \cp -f $SRC/* $DST
ln -s $SRC/* $DST
