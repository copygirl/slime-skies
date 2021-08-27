// priority: 0

onEvent("jei.hide.items", event => {
  // Hide Vanilla saplings and fungus (replaced by Dynamic Trees)
  event.hide("minecraft:oak_sapling");
  event.hide("minecraft:spruce_sapling");
  event.hide("minecraft:birch_sapling");
  event.hide("minecraft:jungle_sapling");
  event.hide("minecraft:acacia_sapling");
  event.hide("minecraft:dark_oak_sapling");
  event.hide("minecraft:crimson_fungus");
  event.hide("minecraft:warped_fungus");

  // Hide Quark saplings (replaced by Dynamic Trees)
  event.hide("quark:blue_blossom_sapling");
  event.hide("quark:lavender_blossom_sapling");
  event.hide("quark:orange_blossom_sapling");
  event.hide("quark:pink_blossom_sapling");
  event.hide("quark:yellow_blossom_sapling");
  event.hide("quark:red_blossom_sapling");

  // Hide certain Create copper and zinc stuff
  // Replaced by Caves & Cliffs Backport and custom zinc
  event.hide("create:copper_ore");
  event.hide("create:zinc_ore");
  event.hide("create:copper_block");
  event.hide("create:copper_shingles");
  event.hide("create:copper_tiles");
  event.hide("create:copper_ingot");
});
