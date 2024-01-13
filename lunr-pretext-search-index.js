var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-language",
  "level": "1",
  "url": "sec-section-language.html",
  "type": "Section",
  "number": "1.1",
  "title": "The language of set theory",
  "body": " The language of set theory  Our version of the language of set theory will consist of a very few symbols together with some basic rules for how these symbols may be concatenated. The language incorporates the following symbols:    The language of set theory, denoted , consists of the following symbols:  connectives and   quantifier   variables ,  parentheses and ,  the equality symbol , and  the membership symbol .    Given our list of allowed symbols, the meaningful statements that can be expressed in our language are produced as follows:      An expression in the language of set theory is defined to be any finite string built from the symbols of     We define a formula of the language of set theory to any expression generated using the following rules:     and are formulas (called atomic formulas) for any and     If and are formulas then so are and     If is a formula then so is for any .      We let denote the collection of formulas of defined above.      The above is our official way of building formulas. We will shortly introduce the other standard logical symbols as abbreviations of more complex formulas from , but as we expand our language we want to keep in mind that the expressions and formulas in the augmented language are actually abbreviations of something written in Our official language is more limited so that it is easier to make definitions and prove facts about without needing to break into too many cases. We illustrate the way this works with a couple of definitions and a lemma.    By recursion we define a function that assigned to each formula of the set of all of its subformulas    If is an atomic formula, then                      The above function takes as input a formula of and returns the collection of all the formulas of that are used to build .   Free and Bound     The range of an occurence of a quantifier in a formula is the unique subformula of beginning with the occurence in question.    An occurence of a variable in a formula is bound if it is within the range of a quantifier of the form . Otherwise the occurence is free .    A formula without free variables is called a sentence , and we let denote the collection of sentences in our language .      "
},
{
  "id": "def-language",
  "level": "2",
  "url": "sec-section-language.html#def-language",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  The language of set theory, denoted , consists of the following symbols:  connectives and   quantifier   variables ,  parentheses and ,  the equality symbol , and  the membership symbol .   "
},
{
  "id": "def-formula",
  "level": "2",
  "url": "sec-section-language.html#def-formula",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "    An expression in the language of set theory is defined to be any finite string built from the symbols of     We define a formula of the language of set theory to any expression generated using the following rules:     and are formulas (called atomic formulas) for any and     If and are formulas then so are and     If is a formula then so is for any .      We let denote the collection of formulas of defined above.     "
},
{
  "id": "sec-section-language-7",
  "level": "2",
  "url": "sec-section-language.html#sec-section-language-7",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  By recursion we define a function that assigned to each formula of the set of all of its subformulas    If is an atomic formula, then                     "
},
{
  "id": "sec-section-language-9",
  "level": "2",
  "url": "sec-section-language.html#sec-section-language-9",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Free and Bound.",
  "body": " Free and Bound     The range of an occurence of a quantifier in a formula is the unique subformula of beginning with the occurence in question.    An occurence of a variable in a formula is bound if it is within the range of a quantifier of the form . Otherwise the occurence is free .    A formula without free variables is called a sentence , and we let denote the collection of sentences in our language .     "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "1.2",
  "title": "Logical Axioms",
  "body": " Logical Axioms  Our formal concept of proof is grounded in standard first order logic with an equality symbol. The exact formulation does matter very much, but for definitiveness we will work with the following logical axioms and rules of inference:   Logical Axioms   We assume the following logical axioms                    where is not free in .     where has no free occurrence in a subformula of form .      The rules of inference we adopt are as follows:     follows from and , and     follows from .    So the question is whether or not this is a wizywg  "
},
{
  "id": "def-FOL",
  "level": "2",
  "url": "sec-.html#def-FOL",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Logical Axioms.",
  "body": " Logical Axioms   We assume the following logical axioms                    where is not free in .     where has no free occurrence in a subformula of form .     "
},
{
  "id": "sec-abbreviations",
  "level": "1",
  "url": "sec-abbreviations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Augmenting the Language",
  "body": " Augmenting the Language  The official definition of we gave in the previous section is not reflective of how the language of set theory is used in practice. The limited definition is useful for defining concepts via recursion, but of course in practice we use a language augmented with other symbols. For example, we will make use of the the following symbols, all of which are defined in terms of via abbreviations:     abbreviates      abbreviates      abbreviates      abbreviates      abbreviates      abbreviates     Introducing a defined relation or predicate to our language works on similar principles: these are just symbols introduced to abbreviate more complex statements in . For example, we can the binary relation symbol is defined by declaring while a predicate capturing \" is empty\" can be introduced by   "
},
{
  "id": "sec-section-semantics",
  "level": "1",
  "url": "sec-section-semantics.html",
  "type": "Section",
  "number": "1.4",
  "title": "Semantics",
  "body": " Semantics  adfjakfjadklal  "
},
{
  "id": "sec-axioms",
  "level": "1",
  "url": "sec-axioms.html",
  "type": "Section",
  "number": "1.5",
  "title": "The axioms of ZFC",
  "body": " The axioms of ZFC   Set Existence         Extensionality         Foundation         Comprehension Schema   For each formula with free variables among , the following statement is an axiom:      Pairing         Union         Replacement Schema   For each formula with free variables among , the following statement is an axiom:       We define , , , and well-ordering.    "
},
{
  "id": "axiom-0",
  "level": "2",
  "url": "sec-axioms.html#axiom-0",
  "type": "Axiom",
  "number": "1.5.1",
  "title": "Set Existence.",
  "body": " Set Existence       "
},
{
  "id": "axiom-1",
  "level": "2",
  "url": "sec-axioms.html#axiom-1",
  "type": "Axiom",
  "number": "1.5.2",
  "title": "Extensionality.",
  "body": " Extensionality       "
},
{
  "id": "axiom-2",
  "level": "2",
  "url": "sec-axioms.html#axiom-2",
  "type": "Axiom",
  "number": "1.5.3",
  "title": "Foundation.",
  "body": " Foundation       "
},
{
  "id": "axiom-comprehension",
  "level": "2",
  "url": "sec-axioms.html#axiom-comprehension",
  "type": "Axiom",
  "number": "1.5.4",
  "title": "Comprehension Schema.",
  "body": " Comprehension Schema   For each formula with free variables among , the following statement is an axiom:    "
},
{
  "id": "axiom-pairing",
  "level": "2",
  "url": "sec-axioms.html#axiom-pairing",
  "type": "Axiom",
  "number": "1.5.5",
  "title": "Pairing.",
  "body": " Pairing       "
},
{
  "id": "axiom-union",
  "level": "2",
  "url": "sec-axioms.html#axiom-union",
  "type": "Axiom",
  "number": "1.5.6",
  "title": "Union.",
  "body": " Union       "
},
{
  "id": "axiom-replacement",
  "level": "2",
  "url": "sec-axioms.html#axiom-replacement",
  "type": "Axiom",
  "number": "1.5.7",
  "title": "Replacement Schema.",
  "body": " Replacement Schema   For each formula with free variables among , the following statement is an axiom:    "
},
{
  "id": "def-basics",
  "level": "2",
  "url": "sec-axioms.html#def-basics",
  "type": "Definition",
  "number": "1.5.8",
  "title": "",
  "body": "  We define , , , and well-ordering.   "
},
{
  "id": "ch-wf",
  "level": "1",
  "url": "ch-wf.html",
  "type": "Chapter",
  "number": "2",
  "title": "The Well-Founded Sets",
  "body": " The Well-Founded Sets  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
