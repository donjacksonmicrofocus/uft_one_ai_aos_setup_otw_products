'Logout and close app

AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")
AIUtil.FindTextBlock("Logout").Click
AIUtil("close", micAnyText, micFromTop, 1).Click
