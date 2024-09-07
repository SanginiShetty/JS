


let f1 = function A() {
    let a = 20;
    console.log("A");

    let f2 = () => {
        let b = 30;
        console.log("B");

        return (() => {
            return (() => {
                console.log("Hello");
            });
        })();
    };

    return f2;
}

console.log(f1()()());
