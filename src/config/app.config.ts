interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Company Representative'],
  customerRoles: [],
  tenantRoles: ['Company Representative'],
  tenantName: 'Organization',
  applicationName: 'askslotbonus',
  addOns: ['chat', 'notifications', 'file'],
};
