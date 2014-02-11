#--------------------------------------------------#
#    Title: Language Selection Dropdown Menu
#--------------------------------------------------#
#    File name:  page.ts
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

page.10.subparts.LANGUAGE = COA
page.10.subparts.LANGUAGE{
  wrap = <div class="language">|</div>
  5 = TEXT
  5.value (
    <script language="JavaScript">
      <!--
      function QuickJump(Formular) {
        var Element = Formular.Ziel.selectedIndex;
        if (Formular.Ziel.options[Element].value != 0) {
          location = Formular.Ziel.options[Element].value;
        }  
      }
      //-->
    </script>
    )
  7 = TEXT
  7.value = Sprache
  7.wrap = <h1>|</h1>
  8 = TEXT
  8.value = <form name="Formular"><select name="Ziel" onchange="QuickJump(this.form);" style="width: 155px;">
  9 = TEXT
  9.value = <option value=""></option>

    #German
  10 = TEXT
  10{
    wrap = <option value="|">German</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_german_id}
    typolink.returnLast = url
  }
 
    #English
  20 = TEXT
  20{
    wrap = <option value="|">English</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_english_id}
    typolink.returnLast = url
  }
 
    #French
  30 = TEXT
  30{
    wrap = <option value="|">French</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_french_id}
    typolink.returnLast = url
  }
 
    #Spanish
  40 = TEXT
  40{
    wrap = <option value="|">Spanish</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_spanish_id}
    typolink.returnLast = url
  }
 
    #Dutch
  50 = TEXT
  50{
    wrap = <option value="|">Dutch</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_dutch_id}
    typolink.returnLast = url
  }
 
    #Portugese
  60 = TEXT
  60{
    wrap = <option value="|">Portugese</option>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_portugese_id}
    typolink.returnLast = url
  }

  100 = TEXT
  100.value = </select></form>
}   