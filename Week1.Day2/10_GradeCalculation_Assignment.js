function studentGrade() {
  let score = 75;
  switch (true) {
    case score >= 80 && score <= 100:
      console.log("A Grade");

      break;
    case score >= 70 && score < 80:
      console.log("B Grade");
      break;
    case score >= 50 && score < 70:
      console.log("C Grade");

      break;
    case score < 50:
      console.log("Fail");

      break;
    default:
      console.log("Invalid score");
  }
}
studentGrade();
