#!/usr/bin/python3
"""Python script that fetches https://intranet.hbtn.io/status."""
import requests

if __name__ == "__main__":
    content = requests.get("https://intranet.alxswe.com/status").
    print("Body response:")
    print("\t- type: {}".format(type(content)))
    print("\t- content: {}".format(content))
