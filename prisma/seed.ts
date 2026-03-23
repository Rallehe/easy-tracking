import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";


const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
async function main() {
  console.log("🌱 Seeding...");

  // 1️⃣ Create Muscle Groups
  const chest = await prisma.muscleGroup.create({
    data: {
      name: "Chest",
    },
  });

  const back = await prisma.muscleGroup.create({
    data: {
      name: "Back",
    },
  });

  const shoulders = await prisma.muscleGroup.create({
    data: {
      name: "Shoulders",
    },
  });

  const biceps = await prisma.muscleGroup.create({
    data: {
      name: "Biceps",
    },
  });

  const triceps = await prisma.muscleGroup.create({
    data: {
      name: "Triceps",
    },
  });

  const gluts = await prisma.muscleGroup.create({
    data: {
      name: "Gluts",
    },
  });

  const quads = await prisma.muscleGroup.create({
    data: {
      name: "Quads",
    },
  });

  const hamstring = await prisma.muscleGroup.create({
    data: {
      name: "Hamstring",
    },
  });

  const calfs = await prisma.muscleGroup.create({
    data: {
      name: "Calfs",
    },
  });

  const abs = await prisma.muscleGroup.create({
    data: {
      name: "Abs",
    },
  });

  // 2️⃣ Create Exercises
  // Chest
  const benchpress = await prisma.exercise.create({
    data: {
      name: "Bench Press",
      muscleGroups: { connect: [{ id: chest.id }] },
    },
  });

  const dbbenchpress = await prisma.exercise.create({
    data: {
      name: "Dumbbell Bench Press",
      muscleGroups: { connect: [{ id: chest.id }] },
    },
  });

  // BACK
  const pulldown = await prisma.exercise.create({
    data: {
      name: "Pull Down",
      muscleGroups: { connect: [{ id: back.id }] },
    },
  });

  const barbellRow = await prisma.exercise.create({
    data: {
      name: "Barbell Row",
      muscleGroups: { connect: [{ id: back.id }] },
    },
  });

  // SHOULDERS
  const overheadPress = await prisma.exercise.create({
    data: {
      name: "Overhead Press",
      muscleGroups: { connect: [{ id: shoulders.id }] },
    },
  });

  const lateralRaise = await prisma.exercise.create({
    data: {
      name: "Lateral Raise",
      muscleGroups: { connect: [{ id: shoulders.id }] },
    },
  });

  // BICEPS
  const barbellCurl = await prisma.exercise.create({
    data: {
      name: "Barbell Curl",
      muscleGroups: { connect: [{ id: biceps.id }] },
    },
  });

  const hammerCurl = await prisma.exercise.create({
    data: {
      name: "Hammer Curl",
      muscleGroups: { connect: [{ id: biceps.id }] },
    },
  });

  // TRICEPS
  const tricepPushdown = await prisma.exercise.create({
    data: {
      name: "Tricep Pushdown",
      muscleGroups: { connect: [{ id: triceps.id }] },
    },
  });

  const skullCrusher = await prisma.exercise.create({
    data: {
      name: "Skull Crusher",
      muscleGroups: { connect: [{ id: triceps.id }] },
    },
  });

  // GLUTES
  const hipThrust = await prisma.exercise.create({
    data: {
      name: "Hip Thrust",
      muscleGroups: { connect: [{ id: gluts.id }] },
    },
  });

  const gluteKickback = await prisma.exercise.create({
    data: {
      name: "Glute Kickback",
      muscleGroups: { connect: [{ id: gluts.id }] },
    },
  });

  // QUADS
  const squat = await prisma.exercise.create({
    data: {
      name: "Squat",
      muscleGroups: { connect: [{ id: quads.id }] },
    },
  });

  const legPress = await prisma.exercise.create({
    data: {
      name: "Leg Press",
      muscleGroups: { connect: [{ id: quads.id }] },
    },
  });

  // HAMSTRINGS
  const RomanianDeadlift = await prisma.exercise.create({
    data: {
      name: "Romanian Deadlift",
      muscleGroups: { connect: [{ id: hamstring.id }] },
    },
  });

  const legCurl = await prisma.exercise.create({
    data: {
      name: "Leg Curl",
      muscleGroups: { connect: [{ id: hamstring.id }] },
    },
  });

  // CALVES
  const standingCalfRaise = await prisma.exercise.create({
    data: {
      name: "Standing Calf Raise",
      muscleGroups: { connect: [{ id: calfs.id }] },
    },
  });

  const seatedCalfRaise = await prisma.exercise.create({
    data: {
      name: "Seated Calf Raise",
      muscleGroups: { connect: [{ id: calfs.id }] },
    },
  });

  // ABS
  const crunch = await prisma.exercise.create({
    data: {
      name: "Crunch",
      muscleGroups: { connect: [{ id: abs.id }] },
    },
  });

  const legRaise = await prisma.exercise.create({
    data: {
      name: "Leg Raise",
      muscleGroups: { connect: [{ id: abs.id }] },
    },
  });
  console.log("✅ Done seeding");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
