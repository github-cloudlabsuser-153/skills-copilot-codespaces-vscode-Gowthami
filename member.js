function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    if (member == "yes") {
        document.getElementById("skills").style.display = "block";
    } else {
        document.getElementById("skills").style.display = "none";
    }
}