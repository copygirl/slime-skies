// priority: 0

onEvent("item.tags", event => {
  event.add("forge:ingots", "cavesandcliffs:copper_ingot");

  event.add("forge:storage_blocks", "cavesandcliffs:copper_block");
  event.add("forge:storage_blocks/copper", "cavesandcliffs:copper_block");

  event.remove("forge:ingots", "create:copper_ingot");
  event.remove("forge:ingots/copper", "create:copper_ingot");
  event.remove("forge:beacon_payment", "create:copper_ingot");

  event.remove("forge:ores", "create:copper_ore");
  event.remove("forge:ores/copper", "create:copper_ore");

  event.remove("forge:storage_blocks", "create:copper_block");
  event.remove("forge:storage_blocks/copper", "create:copper_block");
});

onEvent("block.tags", event => {
  event.add("forge:storage_blocks", "cavesandcliffs:copper_block");
  event.add("forge:storage_blocks/copper", "cavesandcliffs:copper_block");

  event.remove("forge:ores", "create:copper_ore");
  event.remove("forge:ores/copper", "create:copper_ore");

  event.remove("forge:storage_blocks", "create:copper_block");
  event.remove("forge:storage_blocks/copper", "create:copper_block");
  event.remove("minecraft:beacon_base_blocks", "create:copper_block");
});
