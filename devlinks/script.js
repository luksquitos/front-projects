function changeThemeMode()
{
    const body = document.body;
    
    if (body.className == "dark")
    {
        body.className = "light";
    }
    else if (body.className == "light")
    {
        body.className = "dark";
    }
}