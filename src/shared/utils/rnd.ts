export const rnd = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min);

export const randomId = (): number => Math.floor(1 + Math.random() * 900000000);

export const getRandomArrayElement = <T extends any = any>(arr: T[]): T => arr[rnd(0, arr.length - 1)]

export const getRandomName = ():string => {
  const adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"]
  const object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card"]
  return `${getRandomArrayElement(adjective)} ${getRandomArrayElement(object)}`
}

export const randomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum)
  return getRandomArrayElement(enumValues);
}
