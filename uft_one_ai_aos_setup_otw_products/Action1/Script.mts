'Launch app
SystemUtil.Run "C:\aos-admin\AdvantageShopAdministrator.exe"

'Login
AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")
AIUtil("input", micAnyText, micWithAnchorAbove, AIUtil("input", "Password")).SetText "http://nimbusserver.aos.com:8000"
AIUtil("input", "User Name").SetText "admin"
AIUtil("input", "Password").SetText "adm1n"
AIUtil("button", "SIGN IN").Click



