'use server';

export async function inc(x) {
  return x + 1;
}

async function dec(x) {
  return x - 1;
}

export async function double(x) {
  return x * 2;
}

export async function log(x) {
  console.log(dec(x))
}