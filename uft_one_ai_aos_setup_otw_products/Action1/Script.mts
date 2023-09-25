'Launch app
SystemUtil.Run "C:\aos-admin\AdvantageShopAdministrator.exe"

'Login
AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")
AIUtil("input", micAnyText, micWithAnchorAbove, AIUtil("input", "Password")).SetText "http://nimbusserver.aos.com:8000"
'For some reason, on Julio's machine, the AIOD isn't seeing the User Name input correctly, falling back to PBOD
WpfWindow("AOS Managment Console_2").WpfEdit("User Name").Set "admin"
'AIUtil("input", "User Name").SetText "admin"
AIUtil("input", "Password").SetText "adm1n"
AIUtil("button", "SIGN IN").Click



