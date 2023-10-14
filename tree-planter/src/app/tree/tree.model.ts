export class Tree {
  constructor(
    public plant_date: Date,
    public tree_type: string,
    public tree_state: string,
    public last_sprinkled: Date,
    public imageUrl: string
  ) {}
}
