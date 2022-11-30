#!/usr/bin/python3
for a, b in zip(range(123, 97, -1), range(91, 65, -1)):
    if a % 2 == 0:
        print('{}'.format(chr(a)), end='')
    if b % 2 == 1:
        print('{}'.format(chr(b)), end='')
