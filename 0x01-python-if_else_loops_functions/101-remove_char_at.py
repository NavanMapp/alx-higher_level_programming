#!/usr/bin/python3
def remove_char_at(str, n):
    new_char = ''
    str = str[:n] + new_char + str[n+1]
    return str
