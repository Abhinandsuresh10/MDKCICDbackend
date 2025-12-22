import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  const saltRounds = 10; 
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}

export const comparePassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
