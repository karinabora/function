// Minium :-

function n(){
    i=0
    b=a[i]
    list=[]
    while(i<a.length){
        c=a[i]
        if (b>c){
            b=c
        }
        list.push(b)
        i+=1
    }
    console.log(list);
    }
n(a=[1,2,3,2,1])

// ///////////////////////////////////////////////////////////////

function n(){
    i=0
    b=a[i]
    while(i<a.length){
        c=a[i]
        if (b>c){
            b=c
        }
        i+=1
    }
    console.log(b);
    }
n(a=[1,2,3,2,1])
