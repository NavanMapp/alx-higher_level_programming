#!/usr/bin/node
class Rectangle{
    Constructor(w, h){
        if (w && h <= 0){
            this.width = w;
            this.height = h;
        }
    }
    print() {
        for (i = 0; i < this.height; i++) console.log('X'.repeat(this.width));
    }

    rotate(){
        this.width = h;
        this.height = w;
    }

    double(){
        this.width * 2 = w;
        this.height * 2 = h;
    }
}