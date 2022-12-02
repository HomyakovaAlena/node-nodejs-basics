const parseArgs = () => {
  const message = process.argv
    .slice(2)
    .filter((_, index) => index % 2 === 0)
    .map((prop, index) => `${prop} is ${process.argv[index + 3]}`)
    .join(", ");
  console.log(message);
};

parseArgs();
