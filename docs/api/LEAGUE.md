### API: League

### Available Methods

* `allConferences`
  * Parameters:
    * NONE

* `allDivisions`
  * Parameters:
    * NONE

* `allProspects`
  * Parameters:
    * NONE

* `conference`
  * Parameters:
    * `conferenceID`

* `division`
  * Parameters:
    * `divisionID`

* `draft`
  * Parameters:
    * `draftYear`

* `prospect`
  * Parameters:
    * `prospectID`

* `standings`
  * Parameters:
    * NONE

### Parameter Reference

  * `conferenceID`
    * Possible Values:
      * 5 - `Western`
      * 6 - `Eastern`

  * `dateFrom`
    * Possible Values:
      * Date format: `yyyy-mm-dd`

  * `dateTo`
    * Possible Values:
      * Date format: `yyyy-mm-dd`

  * `divisionID`
    * Possible Values:
      * 15 - `Pacific`
      * 16 - `Central`
      * 17 - `Atlantic`
      * 18 - `Metropolitan`

  * `draftYear`
    * Possible Values:
      * Year format: `yyyy`
        * Note: defaults to current year

  * `season`
    * Possible Values:
      * Season format: `yyyyyyyy`
        * Example: `20172018`
