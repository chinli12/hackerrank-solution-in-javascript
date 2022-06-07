// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C.

function catAndMouse(x, y, z)
{
    if (Math.abs(x - z) < Math.abs(y - z)) {
        return "Cat A";
    } else if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}