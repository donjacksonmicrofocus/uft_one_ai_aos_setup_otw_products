
'Setup Yellow Kyber Crystal first, HP S9500 Bluetooth Wireless Speaker is the featured product so it can't be deleted and the Yellow Kyber Crystal text is in the Javascript
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("HP S9500 Bluetooth Wireless Speaker").Click
AIUtil("input", "Product Name").SetText "Yelllow Kyber Crystal"
AIUtil("text_box", "Description").SetText "Represents the power of the sun, hope, and goodness"
AIUtil.FindTextBlock("CUSTOMISATION").Click
AIUtil.FindTextBlock("ADD COLORS").Click
AIUtil("check_box", "no", micFromBottom, 1).SetState "On"
AIUtil.FindTextBlock("APPLY").Click
AIUtil("camera", micAnyText, micFromBottom, 1).Click
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
