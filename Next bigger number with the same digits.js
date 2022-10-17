
function nextBigger(n) {
    n = Array.from(String(n), Number)
    num = n
    flag = false
    for (i = n.length - 1; i >= 0; i--) {
        for (j = i; j >= 0; j--) {
            if (n[i] > n[j]) {
                num = n[i]
                n[i] = n[j]
                n[j] = num
                flag = true
                break
            }
        }
        if (flag == true) {
            break
        }
    }
    if (n == num) {
        n = -1
    }
    n = Number(n.join(""))
    console.log(n);
}
nextBigger(414)