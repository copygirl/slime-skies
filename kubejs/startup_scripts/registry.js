// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc");
  event.create("zinc_sheet").displayName("Zinc Sheet");
});

onEvent("block.registry", event => {
  event.create("zinc_ore").displayName("Zinc Ore")
     .material("stone").hardness(3.0).resistance(3.0)
     .harvestTool("pickaxe", 1).requiresTool(true);

  // TODO: Raw Zinc Block
});
