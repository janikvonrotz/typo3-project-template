#--------------------------------------------------#
#    Title: tt_content Settings
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
#    tt Content
#--------------------------------------------------#
    #Sitemap
tt_content.menu.20.2.entryLevel = {$sitemap_page_id}
    #Add class for all default div text containers
tt_content.text.20.wrap = <div class="rte">|</div>
    # removes blank <dd> tags >> valid XHTML
tt_content.image.20.caption.if.isTrue.field = imagecaption