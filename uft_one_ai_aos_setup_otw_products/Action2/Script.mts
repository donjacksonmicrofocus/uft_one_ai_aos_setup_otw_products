Dim ScriptFolder

AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")

'Setup Yellow Kyber Crystal first, HP S9500 Bluetooth Wireless Speaker is the featured product so it can't be deleted and the Yellow Kyber Crystal text is in the Javascript
AIUtil.FindTextBlock("SPEAKERS").Click
If AIUtil.FindTextBlock("HP S9500 Bluetooth Wireless Speaker").Exist(0) = FALSE Then
	AIUtil.FindTextBlock("SPEAKERS").Click
End If
AIUtil.FindTextBlock("HP S9500 Bluetooth Wireless Speaker").Click
AIUtil("input", "Product Name").SetText "Yelllow Kyber Crystal"
AIUtil("text_box", "Description").SetText "Represents the power of the sun, hope, and goodness"
AIUtil.FindTextBlock("CUSTOMISATION").Click
AIUtil.FindTextBlock("ADD COLORS").Click
AIUtil("check_box", "no", micFromBottom, 1).SetState "On"
AIUtil.FindTextBlock("APPLY").Click
AIUtil("camera", micAnyText, micFromBottom, 1).Click
'msgbox "Set the folder to be " & Environment.Value("TestDir") & "\Kyber Crystals\"
WpfWindow("AOS Managment Console").Dialog("Select image for this color").WinEdit("File name:").Set Environment.Value("TestDir") & "\Kyber Crystals\" & "Yellow Kyber Crystal.jpg"
AIUtil.FindTextBlock("Yellow Kyber Crystal.jpg").Click
AIUtil("button", "Open").Click
AIUtil("button", "SAVE").Click
AIUtil.FindTextBlock("Yelllow Kyber Crystal").Click
AIUtil.FindTextBlock("CUSTOMISATION").Click
AIUtil("check_box", "SPECIAL OFFERS").SetState "On"
AIUtil("check_box", "", micFromTop, 1).SetState "On"
AIUtil("check_box", "", micFromTop, 2).SetState "On"
AIUtil("check_box", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("GENERAL")).SetState "On"
AIUtil("trash").Click
AIUtil("button", "SAVE").Click
AIUtil.FindTextBlock("Yelllow Kyber Crystal").Click
AIUtil.FindTextBlock("SPECIFICATIONS").Click
AIUtil("input", "COMPATIBILITY").SetText "Jedi"
AIUtil("input", "CONNECTOR").SetText "Lightning"
AIUtil("input", "MANUFACTURER").SetText "Rey Rey's"
AIUtil("input", "WIRELESS TECHNOLOGY").SetText "Force"
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("OUT OF STOCK").Click
AIUtil("button", "SAVE").Click


'Code block for working on setting value for folder on initial image import, haven't gotten it working yet
'AIUtil("field", micAnyText, micWithAnchorOnLeft, AIUtil("up_arrow")).SetText Environment.Value("TestDir") & "\Kyber Crystals"
'AIUtil("field", micAnyText, micWithAnchorOnLeft, AIUtil("up_arrow")).Type Environment.Value("TestDir") & "\Kyber Crystals\" & "Yellow Kyber Crystal.jpg"
'print Environment.Value("TestDir")
'ScriptFolder=Split(Environment.Value("TestDir"), "\")
'For i = 1 To ubound(ScriptFolder) Step 1
'	print ScriptFolder(i)
'Next
'
'AIUtil("field", micAnyText, micWithAnchorOnLeft, AIUtil("up_arrow")).SetText Environment.Value("TestDir") 
'AIUtil("field", "File name:").Type Environment.Value("TestDir") & "\Kyber Crystals\" & "Yellow Kyber Crystal.jpg"
'print Environment.Value("TestDir")

