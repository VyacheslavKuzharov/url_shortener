function after15Days() {
    var date = new Date();
    date.setDate(date.getDate()+15);
    return date.toLocaleString();
}

exports.after15Days = after15Days;