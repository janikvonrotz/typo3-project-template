#--------------------------------------------------#
#    Title: Image Custom Link
#--------------------------------------------------#
#    File name:  content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup, page
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
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

 tt_content.image.20.1 {
    # Remove default image link Wrap
    imageLinkWrap >
    imageLinkWrap = 1
    imageLinkWrap {
  
        # Enabele click'n enlarge
        enable.field = image_zoom
        enable.ifEmpty.typolink.parameter.field = image_link
        enable.ifEmpty.typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
        enable.ifEmpty.typolink.returnLast = url
        enable.ifEmpty.typolink.parameter.listNum.splitChar = 10
      
        # New wrapping code
        typolink {
            target = {$styles.content.links.target}
            extTarget = {$styles.content.links.extTarget}
          
            #  Pagth to the original Image
            parameter.cObject = IMG_RESOURCE
            parameter.cObject.file {
                import.data = TSFE:lastImageInfo|origFile
                maxW = 800
                maxH = 600
            }      
          
            # Case link field is filled
            parameter.override.field = image_link
            parameter.override.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
            parameter.override.if.isTrue.field = image_link
            parameter.override.listNum.splitChar = 10
          
            # add the rel-attribute for fancybox
            ATagParams = rel="gallery" title="{field:header}" class="lightbox"
            ATagParams.override = rel="gallery{field:uid}" class="lightbox"
            ATagParams.insertData = 1
            ATagParams.if.isTrue.field = image_zoom

            # Add Caption to the picture        
            ATagParams.postCObject = TEXT
            ATagParams.postCObject{
                field = imagecaption
                stripHtml = 1
                split.token.char = 10
                split.token.if.isTrue = {$styles.content.imgtext.imageTextSplit}
                split.returnKey.data = register : IMAGE_NUM_CURRENT
                noTrimWrap = | title="|" |
            }
        }
    }
}