"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HeaderComponent() {
  return (
    <main className="text-white font-bold h-[62.3vh] flex items-center justify-center bg-top bg-registro bg-cover bg-no-repeat">
      <div className="flex flex-col items-baseline">
        <div className="text-white flex flex-col space-y-0 items-center mt-32 justify-center">
          <h3 className="text-[36px] font-bold mb-[10px]">Información</h3>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white stroke-white" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-white"
                  href="/informacion-legal"
                >
                  informacion Legal
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </main>
  );
}
