// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc");
  event.create("zinc_sheet").displayName("Zinc Sheet");
});

onEvent("block.registry", event => {
  event.create("zinc_ore").displayName("Zinc Ore")
     .material("stone").hardness(3.0).resistance(3.0)
     .harvestTool("pickaxe", 1).requiresTool(true);

  event.create("raw_zinc_block").displayName("Block of Raw Zinc")
    .material("stone").hardness(5.0).resistance(6.0)
    .harvestTool("pickaxe", 1).requiresTool(true);

  event.create("flint_block").displayName("Flint Block")
    .material("stone").hardness(5.0).resistance(6.0)
    .harvestTool("pickaxe", 0).requiresTool(true);
});
