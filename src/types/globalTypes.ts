/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface PageFieldInput {
  slug: string;
  type: string;
  value: string;
}

export interface PageUpdateInput {
  fields?: PageFieldInput[] | null;
  isPublished?: boolean | null;
  name?: string | null;
  parentId?: string | null;
  slug?: string | null;
}

export interface PaginationInput {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}

export interface UserCreateInput {
  email: string;
}

export interface UserUpdateInput {
  isActive?: boolean | null;
  email?: string | null;
}

export interface WebsiteUpdateInput {
  name?: string | null;
  description?: string | null;
  domain?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
