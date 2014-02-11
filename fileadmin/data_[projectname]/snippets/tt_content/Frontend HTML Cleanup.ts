#--------------------------------------------------#
#    Title: Frontend HTML Cleanup
#--------------------------------------------------#
#    File name: content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 22.05.2012
#    Last Edit Date: 22.05.2012
#    Version: 1.0.0
#
#    License:
#    This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

#--------------------------------------------------#
#    HTML Cleanup
#--------------------------------------------------# 

     #Clean up Typo3 content elements and comments
tt_content.stdWrap.prefixComment >
tt_content.header.20.dataWrap >
tt_content.header.20.prefixComment >
tt_content.default.prefixComment >
tt_content.text.stdWrap.prefixComment >
tt_content.text.20.prefixComment >
tt_content.textpic.20.stdWrap.prefixComment >
tt_content.table.20.stdWrap.prefixComment >
tt_content.mailform.20.stdWrap.wrap >
tt_content.menu.20.stdWrap.prefixComment >
tt_content.image.20.stdWrap.prefixComment >
tt_content.list.20.stdWrap.prefixComment >

     #Clean up Typo3 Headings
lib.stdheader.stdWrap.dataWrap = <div class="heading">|</div>
lib.stdheader.10.1.fontTag = <h1>|</h1>
lib.stdheader.10.2.fontTag = <h2>|</h2>
lib.stdheader.10.3.fontTag = <h3>|</h3>
lib.stdheader.10.4.fontTag = <h4>|</h4>
lib.stdheader.10.5.fontTag = <h5>|</h5>
