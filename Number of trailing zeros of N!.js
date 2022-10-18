function zeros(n) {
    let count = n
    flag = true
    count = Math.floor(count / 5)
    n = Math.floor(n / 5)
    while (flag) {

        if (n >= 5) {
            n = Math.floor(n / 5)
            count += n

        } else {
            flag = false
        }
    }

    return count
}