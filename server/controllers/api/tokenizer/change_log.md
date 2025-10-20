The change log will document all modifications made to `prompt.md`

# Change Log for `prompt.md`.
*Date: 9/04/2025*

### Error 100: Unable to determine language

*Issue:* an error code **100** is being returned from the API when a language cannot be detected.

> **Changes Made:** added the instruction *"do not return a code "100" in the detected language if unable to determine the language."* for numbers and gibberish.

*Issue:* URLs are segmented into multiple parts inconsistently.

> **Changes Made:** added instructions for handling URLS specifically.

___

*Date: 8/27/2025*

The current `prompt.md` file is structured, but has a few weak points where ambiguity has caused errors in the past:

### 1. **`detected_language` Property Placement**

In `prompt.md` the `detected_language` is inside the array along with the words, but in the schema `detected_language` is a separate field from the array of words. This mismatch could be causing confusion to the model.

> **Changes Made:** 
> - Make it explicit in the prompt that "detected_language" should be returned once at the top level (not inside the array), to align with `z.object`.
> - Updated the `textDetails` Schema to make `detectedLanguages` a list of detected languages.

### 2. **Special Characters & Emojis 🚩**

The prompt is not clear on how to handle special charactes and emojis that have no definition or pronounciation.

> **Changes made:** If a special character or emoji has no definition, return `"definition": ""`

### 3. **Multi-Language Handling.**

The prompt is not clear on what to do if languages are used in exact equal proportion (50/50 split).

> **Changes made:** The output Schema has been updated. `detected_language` is now an array of strings. Each detected language should be listed. If the split is 50/50, the first detected language will be listed first.

### 4. **Non-Standard Text (Numbers, acronyms, gibberish)**
It's unclear on what the returned values should be for tokens representing numbers, acronyms and unknown words (gibberish).

> **Changes made:**
> - **Numbers** return: 
> > - `word:` the number in written format.
> > - `pronounciation:` the phonetic pronounciation.
> > - `definition:` the number.
> - **Acronyms:** use context to infer what the definition of the acronym could be. If no certain conclusion can be drawn from context, return: 
> > - `word:` the acronym as written.
> > - `pronounciation:` the phonetic pronounciation.
> > - `definition:` acronym.
> - **Unknown words** *(gibberish)*: return
> > - `word:` the word as written.
> > - `pronounciation:` the phonetic pronounciation.
> > - `definition:` acronym.