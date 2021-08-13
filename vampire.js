class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    if(this.creator == null)
    return 0;
    return this.creator.numberOfVampiresFromOriginal + 1;


  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    var current = this.numberOfVampiresFromOriginal;
    var vam = vampire.numberOfVampiresFromOriginal;

    return vam>current;

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  getAncessor(vampire, list)
  {
    if(vampire == null)
      return list;
    if(vampire.creator == null) 
    {
      list.push(vampire);
      return list;
    }
    list.push(vampire);
    return vampire.getAncessor(vampire.creator, list);
  }
  closestCommonAncestor(vampire) {
    var x = this.getAncessor(this, []);
    var y = this.getAncessor(vampire, []);
    var xx = '', yy = '';
    for(let i=0; i<x.length; i++)
    {
      xx+= x[i].name + ", ";
    }
    for(let i=0; i<y.length; i++)
    {
      yy+= y[i].name + ", ";
    }
    var result = null;
    for(let i=0; i<x.length; i++)
    {
      for(let j=0; j<y.length; j++)
      {
        if (x[i].name === y[j].name)
        {
          result = x[i];
          return result;
        }
      }
    }
  }

  }


module.exports = Vampire;

