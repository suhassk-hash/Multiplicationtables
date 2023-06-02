function calculateTotalCost() {
    var consumerName = document.getElementById("consumerName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var function calculateTotalCost() {
        var consumerName = document.getElementById("consumerName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var units = parseFloat(document.getElementById("units").value);
        var totalUnitCost = 0.0;
        var totalCost = 0.0;
    
        if (units > 0 && units <= 50)
            totalUnitCost = 7.00 * units;
        else if (units > 50 && units <= 100)
            totalUnitCost = 50 * 7.00 + ((units - 50) * 8.50);
        else if (units > 100 && units <= 300)
            totalUnitCost = 50 * 7.00 + 50 * 8.50 + ((units - 100) * 9.90);
        else if (units > 300 && units <= 500)
            totalUnitCost = 50 * 7.00 + 50 * 8.50 + 200 * 9.90 + ((units - 300) * 10.40);
        else if (units > 500)
            totalUnitCost = 50 * 7.00 + 50 * 8.50 + 200 * 9.90 + 200 * 10.40 + ((units - 500) * 11.00);
    
        totalCost = totalUnitCost + 65;
    
        document.getElementById("output").innerHTML =
            "<p>Consumer Name: " + consumerName + "</p>" +
            "<p>Phone Number: " + phoneNumber + "</p>" +
            "<p>Total Units: " + units + "</p>" +
            "<p>Total Cost: " + totalCost + "</p>" +
            "<p>Monthly minimum energy charges: Rs.65/month for single-phase supply</p>";
    }
    units = parseFloat(document.getElementById("units").value);
    var totalUnitCost = 0.0;
    var totalCost = 0.0;

    if (units > 0 && units <= 50)
        totalUnitCost = 7.00 * units;
    else if (units > 50 && units <= 100)
        totalUnitCost = 50 * 7.00 + ((units - 50) * 8.50);
    else if (units > 100 && units <= 300)
        totalUnitCost = 50 * 7.00 + 50 * 8.50 + ((units - 100) * 9.90);
    else if (units > 300 && units <= 500)
        totalUnitCost = 50 * 7.00 + 50 * 8.50 + 200 * 9.90 + ((units - 300) * 10.40);
    else if (units > 500)
        totalUnitCost = 50 * 7.00 + 50 * 8.50 + 200 * 9.90 + 200 * 10.40 + ((units - 500) * 11.00);

    totalCost = totalUnitCost + 65;

    document.getElementById("output").innerHTML =
        "<p>Consumer Name: " + consumerName + "</p>" +
        "<p>Phone Number: " + phoneNumber + "</p>" +
        "<p>Total Units: " + units + "</p>" +
        "<p>Total Cost: " + totalCost + "</p>" +
        "<p>Monthly minimum energy charges: Rs.65/month for single-phase supply</p>";
}
