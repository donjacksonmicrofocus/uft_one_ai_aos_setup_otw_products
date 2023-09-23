Dim ColorIndex, counter
AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")
	
AIUtil.FindTextBlock("SPEAKERS").Click

AIUtil.FindTextBlock("ADD").Click
AIUtil("combobox", "Category").Select "Speakers"
AIUtil("input", "Product Name").SetText DataTable.Value("Product Name", "Setup_New_Speaker_Product")
'AIUtil("input", "Product Name").SetText "Blue Kyber Crystal" 
AIUtil("input", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Price")).SetText DataTable.Value("Price", "Setup_New_Speaker_Product")
AIUtil("text_box", "Description").SetText DataTable.Value("Description", "Setup_New_Speaker_Product")
AIUtil.FindTextBlock("CUSTOMISATION").Click
AIUtil.FindTextBlock("ADD COLORS").Click
ColorIndex = DataTable.Value("Color Index", "Setup_New_Speaker_Product") + 1 - 1
AIUtil("check_box", micAnyText, micFromLeft, ColorIndex).SetState "On"
AIUtil.FindTextBlock("APPLY").Click
AIUtil("camera").Click
AIUtil.FindText(DataTable.Value("Image Name", "Setup_New_Speaker_Product")).Click
AIUtil("button", "Open").Click
AIUtil("text_box", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("IMAGES", micFromBottom, 1)).SetText DataTable.Value("Quantity", "Setup_New_Speaker_Product")
AIUtil("down_triangle").Click
If (DataTable.Value("Stock Status", "Setup_New_Speaker_Product") = "IN STOCK") Then
	AIUtil.FindTextBlock("IN STOCK", micFromBottom, 1).Click
Else
	AIUtil.FindTextBlock(DataTable.Value("Stock Status", "Setup_New_Speaker_Product")).Click
End If
AIUtil.FindTextBlock("SPECIFICATIONS").Click
AIUtil("input", "COMPATIBILITY").SetText DataTable.Value("Compatibility", "Setup_New_Speaker_Product")
AIUtil("input", "MANUFACTURER").SetText DataTable.Value("Manufacturer", "Setup_New_Speaker_Product")
AIUtil("button", "SAVE").Click
counter = 0
While AIUtil.FindTextBlock("Image not uploaded. Check log file.").Exist(5)
	AIUtil("button", "OK").Click
	RunAction "Logoff_and_Close", oneIteration
	RunAction "Launch_and_Login", oneIteration
	AIUtil.FindTextBlock("SPEAKERS").Click
	AIUtil.FindTextBlock(DataTable.Value("Product Name", "Setup_New_Speaker_Product")).Click
	AIUtil.FindTextBlock("CUSTOMISATION").Click
	AIUtil("camera", micAnyText, micFromTop, 1).Click
	AIUtil.FindText(DataTable.Value("Image Name", "Setup_New_Speaker_Product")).Click
	AIUtil("button", "Open").Click
	AIUtil("button", "SAVE").Click
	AIUtil.FindTextBlock("SPEAKERS").Click
	AIUtil.FindTextBlock(DataTable.Value("Product Name", "Setup_New_Speaker_Product")).Click
	AIUtil.FindTextBlock("CUSTOMISATION").Click
	
	AIUtil("check_box", micAnyText, micFromRight, 1).SetState "On"
	'AIUtil("check_box", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Sorry")).SetState "On"
	AIUtil("trash").Click
	AIUtil("button", "SAVE").Click
	counter = counter + 1
	If counter >= 60 Then
		Reporter.ReportEvent micFail, "Setup " & DataTable.Value("Product Name", "Setup_New_Speaker_Product"), "The admin console errored out uploading the picture, you will need to go back and do so yourself"
		Reporter.ReportEvent micFail, "Clicking the OK button on the Image not uploaded box FAILED", "Killing the script"
		RunAction "Logoff_and_Close", oneIteration
		RunAction "Launch_and_Login", oneIteration
		ExitIteration 
	End If
Wend



