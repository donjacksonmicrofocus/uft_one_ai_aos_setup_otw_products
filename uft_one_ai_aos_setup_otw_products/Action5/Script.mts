Dim RowTextBox, RowNum
AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=AOS Managment Console", "devname:=AOS Managment Console")
AIUtil.FindTextBlock("SPEAKERS").Click

RowNum = 1
Do
	print "Checking the number of rows in the table, currently checking row " & RowNum
	Set RowCheckBox = AIUtil("check_box", micAnyText, micFromTop, RowNum)
'	RowCheckBox.Highlight
	RowNum = RowNum + 1
	Set RowCheckBox = AIUtil("check_box", micAnyText, micFromTop, RowNum)
Loop While RowCheckBox.Exist(0)
print "The number of rows is " & RowNum - 1
For Iterator = 1 To (RowNum-1) Step 1
	Set RowCheckBox = AIUtil("check_box", micAnyText, micFromTop, RowNum-Iterator)
	'The OCR is getting false positives on some of the images, reverting to properties-based table work
	rc = WpfWindow("AOS Managment Console").WpfTable("ProductsDataGrid").Exist
	RowTextBox = WpfWindow("AOS Managment Console").WpfTable("ProductsDataGrid").GetCellData((RowNum-1-Iterator),"NAME")
	WpfWindow("AOS Managment Console").WpfTable("ProductsDataGrid").SelectCell (RowNum-1-Iterator),"NAME"
	'RowTextBox = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, RowCheckBox).GetText
	'AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, RowCheckBox).Click	
	print "The row text is " & RowTextBox
	If RowTextBox = "HP S9500 Bluetooth Wireless Speaker" Then
		AIUtil("button", "CANCEL").Click
	Else
		'On some of the products the AIOD doesn't see the input box as a field at all, reverting to properties-based with VRI
		'AIUtil("input", "Product Name").SetText "z" & RowTextBox
		WpfWindow("AOS Managment Console").WpfEdit("Product Name Field").Set "z" & RowTextBox

		AIUtil("down_triangle", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Logout")).Click
		If AIUtil.FindTextBlock("BLOCKED").Exist(0) Then
			AIUtil.FindTextBlock("BLOCKED").Click
		Else
			AIUtil.FindTextBlock("BLOCKED", micFromBottom, 1).Click
		End If
		AIUtil("button", "SAVE").Click	
	End If	
	
Next
'print "pause"

