const formatNumber = (price, dec) => (parseInt(price) || 0).toLocaleString("en-US", {
    minimumFractionDigits: dec || 0,
    maximumFractionDigits: dec || 0,
});

const padNum = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

export {
    formatNumber,
    padNum
}